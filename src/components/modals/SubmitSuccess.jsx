import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const SubmitSuccess = ({ open, onClose, data }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Submission Successful!
          </DialogTitle>
        </DialogHeader>
        <div>ชื่อ : {data?.name}</div>
        <div>อีเมล : {data?.email}</div>
        <div>ภาพยนตร์ที่เลือก : {data?.movies}</div>
        {data?.desc && <div>ความคิดเห็น : {data.desc}</div>}
        <DialogFooter>
          <Button onClick={onClose}>กรอกฟอร์มอีกครั้ง</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitSuccess;
