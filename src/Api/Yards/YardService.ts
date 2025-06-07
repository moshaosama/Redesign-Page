import axios from "axios";
import { ParentService } from "../ParentService";

class YardService extends ParentService {
  async getYards(_: any, thunkApi: any) {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error as string);
    }
  }
}

export const yardService = new YardService();
