import { Welcome, Button, Table } from "@mayntri/frontend-core";
import { Box, Button as Button2, Slide, Typography } from "@mui/material";
import { useMerchants } from "@mayntri/react-sdk";
import { useState } from "react";

const DashboardDefault = () => {
  const [checked, setChecked] = useState(false);

  const result = useMerchants();
  const data = result.data?.pages[0].data || [];

  return (
    <div className="App">
      <Welcome />
      <Button label="Button" />
      <Button2 onClick={() => setChecked(!checked)}>Test</Button2>

      <Box sx={{ width: `calc(100px + 16px)` }}>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Typography>test</Typography>
        </Slide>
      </Box>

      <Table
        data={data}
        columns={[
          {
            accessorKey: "_id",
            header: "ID",
          },
        ]}
      />
    </div>
  );
};

export default DashboardDefault;
