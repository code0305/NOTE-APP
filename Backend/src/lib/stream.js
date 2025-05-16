import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.Stream_key;
const apiSecret = process.env.Stream_secretKEY;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
    try {
      await streamClient.upsertUsers([userData]);
      return userData;
    } catch (error) {
      console.error("Error upserting Stream user:", error);
    }
  };