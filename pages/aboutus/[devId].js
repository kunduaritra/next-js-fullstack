import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Developer = () => {
  const router = useRouter();

  const newsId = Number(router.query.devId);

  let developerInfo = <h2>Developer doesn't exist</h2>;

  details.forEach((dev) => {
    if (dev.id === newsId) {
      developerInfo = (
        <h2>
          {dev.name} - {dev.role}
        </h2>
      );
    }
  });

  return (
    <div>
      <h1>
        Aritra Kundu, <em>Front End Developer</em>
      </h1>
      {developerInfo}
    </div>
  );
};

export default Developer;
