import cors from "cors";
import express from "express";
import helmet from "helmet";

import { auth, getRole, loginRouter, registerRouter } from "./controllers/auth";
import { bookingRouter } from "./controllers/booking";
import { eventRouter } from "./controllers/event";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT }));

const PORT = process.env.PORT || 3000;

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/event", eventRouter);
app.use("/booking", bookingRouter);
app.get("/role", auth, getRole);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
