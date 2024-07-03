import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

async function runCompletion() {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'How are you today?',
    max_tokens: 4000,
  });
  console.log(completion.data.choices[0].text);
}
runCompletion();
