import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    console.log("Deleting item with pizzaId:", pizzaId);
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={handleDeleteClick}>
      Delete
    </Button>
  );
}

export default DeleteItem;
