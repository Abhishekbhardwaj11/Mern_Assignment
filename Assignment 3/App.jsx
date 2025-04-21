import TextUpdater from "./TextUpdater";
import TextForm from "./TextForm";
import UserCard from "./UserCard";
import Button from "./Button";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-600">React Assignments</h1>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">1. TextUpdater</h2>
        <TextUpdater />
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">2. TextForm</h2>
        <TextForm />
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">3. UserCard</h2>
        <UserCard name="Alice Smith" email="alice@example.com" />
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">4. Button</h2>
        <Button />
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">5. LoginForm</h2>
        <LoginForm />
      </section>
    </div>
  );
}

export default App;
