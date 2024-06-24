import Maker from "@/app/components/Maker";
import Title from "@/app/components/ui/commons/title";

export default function MakerPage() {
  return (
    <div style={{ padding: "20px" }}>
      <Title
        variant="h2"
        className="underline text-center decoration-primary-400 dark:decoration-primary-700"
      >
        Maker
      </Title>
      <Maker />
    </div>
  );
}
