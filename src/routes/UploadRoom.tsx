import ProtectedPage from "../components/ProtectedPage";
import useHostOnly from "../lib/useHostOnly";
import useLoginOnly from "../lib/useLoginOnly";

export default function UploadRoom() {
  useLoginOnly();
  useHostOnly();
  return (
    <ProtectedPage>
      <h1>Upload page.</h1>
    </ProtectedPage>
  );
}
