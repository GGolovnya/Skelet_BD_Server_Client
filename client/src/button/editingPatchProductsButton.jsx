// EditingProductsButton.jsx
import { Button } from "@nextui-org/react";

export function EditingPatchProductsButton({ product, onEdit }) {
    return (
      <Button onClick={() => onEdit(product)}>
        ВНЕСТИ ЧАСТИЧНЫЕ ИЗМЕНЕНИЕ В ЗАПИСЬ
      </Button>
    );
  }