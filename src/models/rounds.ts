import mongoose from "mongoose";

const modelName = "baccaratballs_rounds";

const resultSchema = new mongoose.Schema(
  [
    {
      drawId: { type: Number, required: true },
      player: { type: Number, required: true },
      banker: { type: Number, required: true },
    },
  ],
  {
    _id: false,
  }
);

const settlementResultSchema = new mongoose.Schema(
  [
    {
      drawId: { type: Number, required: true },
      player: { type: Boolean, default: false },
      banker: { type: Boolean, default: false },
      tie: { type: Boolean, default: false },
    },
  ],
  { _id: false }
);

const Schema = new mongoose.Schema({
  id: { type: Number, required: true },
  result: resultSchema,
  settlementResult: settlementResultSchema,
  time: { type: Date, default: new Date() },
  exchangeRateId: { type: Number, require: true },
});

export default mongoose.model(modelName, Schema);
