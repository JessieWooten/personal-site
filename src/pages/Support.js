import React, { useState } from "react";
import parseQueryString from "../utils/parseQueryString";
import { Container, Row, Col } from "../components/Layout";

const SupportPage = ({ location: { search } }) => {
  const { product } = parseQueryString(search);
  const [subject, setSubject] = useState(
    product ? `Issue with ${product}` : ""
  );
  const [body, setBody] = useState("");
  const isButtonDisabled = () => subject.trim() === "" || body.trim() === "";
  return (
    <Container className="h-screen w-screen overflow-auto flex justify-center">
      <Row>
        <Col className="px-8 py-40 overflow-hidden flex-1">
          <form
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="black">Need Help?</h1>
            <p className="mb-4 black">
              Let me know what you're experiencing and we will get to the bottom
              of it!
            </p>
            <div className="mb-4">
              <label
                className="block black text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="shadow h-32 appearance-none border border-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="body"
                placeholder="How can I help you?"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <a
                className={isButtonDisabled() ? "disabled" : ""}
                href={`mailto:jessiewootendev@gmail.com?subject=${subject}&body=${encodeURIComponent(
                  body
                )}`}
              >
                <button
                  disabled={isButtonDisabled()}
                  className="blue-bg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Email
                </button>
              </a>
            </div>
          </form>
        </Col>
        <Col className="hero-gradient-background overflow-hidden"></Col>
      </Row>
    </Container>
  );
};

export default SupportPage;
