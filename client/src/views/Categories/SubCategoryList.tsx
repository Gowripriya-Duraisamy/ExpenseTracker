import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

import classes from "./category.module.css";

interface SubCategoryList {
  id: number;
  name: string;
  type: string;
}

interface SubCategoryListProps {
  data: SubCategoryList[];
}

const SubCategory: FC<SubCategoryListProps> = ({ data }) => {
  return (
    <>
      {data.map((datum, index) => {
        return (
          <Card key={index} className={classes.subCard}>
            <CardContent className={classes.subCardContent}>
              <Typography>{datum.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default SubCategory;
