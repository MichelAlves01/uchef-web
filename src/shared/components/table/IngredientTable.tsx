import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { Ingredient } from "../../../model/Ingredient";
import { TextField } from "@mui/material";

interface IngredientTableProps {
  ingredients: Set<Ingredient> | undefined;
}

export default function IngredientTable({
  ingredients,
}: Readonly<IngredientTableProps>) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingredient</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">unit</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients &&
            Array.from(ingredients).map((ingredient) => (
              <TableRow
                key={ingredient.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "1rem",
                }}
              >
                <TableCell scope="row">{ingredient.name}</TableCell>
                <TableCell align="right">
                  <TextField
                    variant="standard"
                    style={{ width: "4rem" }}
                    type="number"
                    size="small"
                    value={ingredient.quantity}
                  ></TextField>
                </TableCell>
                <TableCell align="right">{ingredient.defaultUnit}</TableCell>
                <TableCell align="right">{ingredient.category}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
