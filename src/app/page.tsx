import FocusDashboard from "../../components/FocusDashboard/FocusDashboard";
import Gamification from "../../components/Gamification/Gamification";
import PromodoroTimer from "../../components/PromodoroTimer/PromodoroTimer";

export default function Home () {
  return (
    <main>
      <PromodoroTimer/>
      <FocusDashboard/>
      <Gamification/>
    </main>
  )
}