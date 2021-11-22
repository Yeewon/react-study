import { Button, InputBase, Paper } from "@material-ui/core";

function AddTodoForm() {
  return (
    <div>
      <form style={{ display: "flex", margin: 10 }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="TODO"
          inputProps={{
            "aria-label": "Description",
          }}
          style={{ width: "90%" }}
        />
        <Button type="submit" variant="text" style={{ width: "10%" }}>
          Add
        </Button>
      </form>
    </div>
    //     <form>
    //       <TextField fullWidth />
    //       {/* <Input></Input> */}
    //       <Button
    //         type="submit"
    //         variant="text"
    //         color="whites"
    //         style={{ width: "10%" }}
    //       >
    //         Add
    //       </Button>
    //     </form>
    //   );
  );
}

export default AddTodoForm;
