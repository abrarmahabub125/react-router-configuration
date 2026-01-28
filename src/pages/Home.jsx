import { Form } from "react-router";

const Home = () => {
  return (
    <div>
      <Form action="/search">
        <input type="text" name="query" />
      </Form>
    </div>
  );
};

export default Home;
