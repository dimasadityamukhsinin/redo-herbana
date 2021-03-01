import { goPrev, goNext } from "@/components/utils";

const Control = ({slider}) => {
  return (
    <div className="control">
      <button
        className="left_arrow"
        onClick={() => goPrev(slider)}
      />
      <button
        className="right_arrow"
        onClick={() => goNext(slider)}
      />
    </div>
  );
};

export default Control;