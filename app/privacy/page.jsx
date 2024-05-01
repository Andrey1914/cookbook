import Link from "next/link";

export const metadata = {
  title: "CookBook - Privacy policy",
};

export default function Privacy() {
  return (
    <div className="my-5 md:my-12">
      <h1 className="text-3xl font-semibold my-4">Privacy Policy</h1>
      <p className="my-4">Last Updated: 01-May-2024</p>
      <p className="my-4">
        Welcome to CookBook! This Privacy Policy describes how CookBook
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and
        shares your personal information when you use our application. By
        accessing or using CookBook, you agree to the terms outlined in this
        Privacy Policy.
      </p>
      <ul className="list-decimal px-3">
        <li className="my-4">
          <b className="font-semibold">Information We Collect</b>
          <ul className="list-disc px-3 my-4">
            <li className="my-4">
              <b className="font-medium">User-Provided Information</b>: When you
              use CookBook, you may provide information such as your name, email
              address, and preferences.
            </li>
            <li className="my-4">
              <b className="font-medium">Automatically Collected Information</b>
              : We may collect information about your device, including IP
              address, device type, browser type, and other technical
              information.
            </li>
            <li className="my-4">
              <b className="font-medium">Usage Information</b>: We collect
              information about your interactions with the app, such as the
              recipes you view, save, or share.
            </li>
          </ul>
        </li>
        <li className="my-4">
          <b className="font-semibold">How We Use Your Information</b>
          <ul className="list-disc px-3 my-4">
            <li className="my-4">
              <b className="font-medium">Personalization</b>: We use your
              information to personalize your experience on CookBook, providing
              you with tailored recipe recommendations and content.
            </li>
            <li className="my-4">
              <b className="font-medium">Communication</b>
              :We may use your email address to send you updates, newsletters,
              and important information about the app. You can opt-out of these
              communications at any time.
            </li>
            <li className="my-4">
              <b className="font-medium">Analytics</b>: We use analytics tools
              to better understand how users interact with our app and improve
              its functionality.
            </li>
          </ul>
        </li>
        <li className="my-4">
          <b className="font-semibold">Sharing Your Information</b>
          <ul className="list-disc px-3 my-4">
            <li className="my-4">
              <b className="font-medium">Legal Compliance</b>: We may disclose
              your information if required by law or in response to a valid
              legal request.
            </li>
          </ul>
        </li>
        <li className="my-4">
          <b className="font-semibold">Security</b>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, and destruction.
            However, no data transmission or storage system is entirely secure.
          </p>
        </li>

        <li className="my-4">
          <b className="font-semibold">Changes to this Privacy Policy</b>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices. We will notify you of any material changes by posting the
            updated policy on the app.
          </p>
        </li>
        <li className="my-4">
          <b className="font-semibold">Contact Us</b>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <Link href="mailto:anlikajw@gmail.com" className="underline">
              anlikajw@gmail.com
            </Link>
            .
          </p>
        </li>
      </ul>
    </div>
  );
}
