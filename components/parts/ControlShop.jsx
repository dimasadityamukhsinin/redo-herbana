import { goPrev, goNext } from "@/components/utils";

const ControlShop = ({slider}) => {
  return (
    <div className="controlShop">
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

export default ControlShop;