import { isMaintenance } from "@/utils/isMaintenance";
import Container from "./Container";
import Heading from "./Heading";

export const Maintainance: React.FC = () => {
  return (
    <Container>
      <Heading>En maintenance...</Heading>
      <div>On revient très vite !</div>
    </Container>
  );
};

export function withMaintenance<P extends object = {}>(
  Comp: React.FC<P>,
  path?: string
) {
  const CompWithMaintenance: React.FC<P> = (props) => {
    if (isMaintenance(path)) {
      return <Maintainance />;
    }

    return <Comp {...props} />;
  };

  CompWithMaintenance.displayName = `WithMaintenance(${
    Comp.displayName ?? Comp.name ?? "Anonymous"
  })`;

  return CompWithMaintenance;
}
