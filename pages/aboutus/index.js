import Link from "next/link";
import { Fragment } from "react";

export const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        {details.map((emp) => (
          <li key={emp.id}>
            <Link href={`/aboutus/${emp.id}`}>{emp.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NewsPage;
