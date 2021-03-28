import mongoose from "mongoose";
import { ResourceId } from "@lendruk/untitledapilibrary/build/database/ResourceId";
export default class ObjectId extends mongoose.Schema.Types.ObjectId implements ResourceId {}
