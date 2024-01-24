import { useState } from "react";
import { AlertDialog } from "~/ui/components/AlertDialog";
import { Button } from "~/ui/components/Button";
import { Modal } from "~/ui/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      home
      <Button variant="destructive" onPress={() => setModalOpen(!modalOpen)}>
        HOLA
      </Button>
      <div>
        <Button variant="secondary">Delete…</Button>
        <Modal isOpen={modalOpen}>
          <AlertDialog
            actionLabel="Delete"
            onAction={() => setModalOpen(!modalOpen)}
            title="Delete folder"
            variant="destructive"
          >
            Are you sure you want to delete {"Documents"}? All contents will be
            permanently destroyed.
          </AlertDialog>
        </Modal>
      </div>
    </div>
  );
}
