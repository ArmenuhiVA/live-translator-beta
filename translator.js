const { Configuration, OpenAIApi } = require("openai");

const translator = async (inputText) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createEdit({
        model: "text-davinci-edit-001",
        input: "What day of the wek is it?",
        instruction: "Fix the spelling mistakes",
    });
  return response.data.choices[0].text;
}
export default translator;