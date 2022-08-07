import sgMail, { MailDataRequired } from "@sendgrid/mail";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string }>
) {
  // POST以外排除
  if (req.method !== "POST") {
    res.status(500).json({ msg: "Only Post Method" });
    return;
  }

  const sendgridKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const bccEMAIL = process.env.BCC_EMAIL;
  const recaptchaKey = process.env.RECAPTCHA_SERVER_KEY;

  if (!sendgridKey || !fromEmail || !bccEMAIL || !recaptchaKey) {
    console.log("設定エラー");
    res.status(500).json({ msg: "Server Error" });
    return;
  }

  sgMail.setApiKey(sendgridKey);

  const { name, email, content, token } = req.body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof content !== "string" ||
    typeof token !== "string"
  ) {
    res.status(400).json({ msg: "Parameter Error" });
    return;
  }

  try {
    const recaptchaResult = await axios.post<{
      success: boolean;
      challenge_ts: string;
      hostname: string;
      score: number;
      "error-codes": string[];
    }>(
      "https://www.google.com/recaptcha/api/siteverify",
      `secret=${recaptchaKey}&response=${token}`,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    if (!recaptchaResult.data.success || recaptchaResult.data.score < 0.4) {
      throw new Error("");
    }
  } catch {
    res.status(400).json({ msg: "Recaptcha Error" });
    return;
  }

  const msg: MailDataRequired = {
    to: email,
    bcc: bccEMAIL,
    from: fromEmail,
    subject: "お問い合わせありがとうございます",
    html: `
      <p>${name}様</p>
      <p>お問い合わせありがとうございます<p>
      <p>${content}</p>
      <p>本メールはシステムより自動送信されております</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ msg: "Message sent successfully." });
  } catch (error) {
    res.status(400).send({ msg: "Message not sent." });
  }
}
