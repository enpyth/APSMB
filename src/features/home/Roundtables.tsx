"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Recycling from "@mui/icons-material/Recycling";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import BiotechIcon from "@mui/icons-material/Biotech";
import WaterIcon from "@mui/icons-material/Water";

const roundtables = [
  {
    icon: <Recycling sx={{ fontSize: 50, color: "primary.main" }} />,
    title: "Blue Carbon",
    description:
      "When protected or restored, blue carbon ecosystems sequester and store carbon. When degraded or destroyed, these ecosystems emit the carbon they have stored for centuries into the atmosphere and oceans and become sources of greenhouse gases. Experts estimate that as much as 1.02 billion tons of carbon dioxide are being released annually from degraded coastal ecosystems, which is equivalent to 19% of emissions from tropical deforestation globally. The round table will discuss practical initiatives that could be implemented and accelerated.",
  },
  {
    icon: <AgricultureIcon sx={{ fontSize: 50, color: "primary.main" }} />,
    title: "Blue Agriculture",
    description:
      "The Growing Consumer Interest about the Source of Their Food and Agricultural Inputs Used In Them Can Lead To a Significant Boost in Demand for Seaweed Bio-Fertilizers in the Forthcoming Years. Seaweed bio-stimulants are a source of oligo-elements such as cytokinesis, auxins, gibberellins, amino acids, and complex sugars, and they are also high in inorganic elements like nitrogen, phosphorus, potassium, and iron. These vital nutritional ingredients ensure the nutrition seaweed needs, enhancing the world's Seaweed Bio-fertilizers market's economic growth over the next few years.",
  },
  {
    icon: <BiotechIcon sx={{ fontSize: 50, color: "primary.main" }} />,
    title: "Marine Biomanufacturing",
    description:
      "Biopharmaceutical companies face greater challenges than ever before when developing new large molecule and small molecule products. Therapeutic targets in the pipeline are increasing due to the rise in mRNA, specialized medicines, oncology treatments, orphan indications, and more. The new development in marine biomanufacturing could bring an added value to the existing sector. The round table will discuss the new discoveries.",
  },
  {
    icon: <WaterIcon sx={{ fontSize: 50, color: "primary.main" }} />,
    title: "Cellular Mariculture",
    description:
      "Cellular mariculture is the process of producing animal-based foods and other products directly from marine organism's cells and could be a valid and sustainable source of alternative proteins. The development of cellular mariculture is motivated by the need to develop a sustainable food production system, addressing the overuse of antibiotics, food and water safety, environmental footprint, and animal welfare.",
  },
];

export default function Roundtables() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Roundtables
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 1200, mx: "auto" }}
        >
          Expert discussions on key topics shaping the future of marine biotechnology
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
          justifyContent: "center",
          maxWidth: "1700px",
          mx: "auto",
        }}
      >
        {roundtables.map((roundtable, index) => (
          <Card
            key={index}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 4,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Box sx={{ textAlign: "center", mb: 3 }}>{roundtable.icon}</Box>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600, textAlign: "center" }}
              >
                {roundtable.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                {roundtable.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
