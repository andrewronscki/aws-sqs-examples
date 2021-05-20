const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1'
})

const sqs = new AWS.SQS()
const QUEUE_URL = process.env.QUEUE_URL

async function sendPoisonMessage() {
  await sqs.sendMessage({
    MessageBody: `<?xml version="1.0" encoding="UTF-8"?>
    <root>
       <conta_destino>
          <agencia>1</agencia>
          <numero_conta>765432-1</numero_conta>
       </conta_destino>
       <conta_origem>
          <agencia>1</agencia>
          <numero_conta>123456-7</numero_conta>
       </conta_origem>
       <moeda>BRL</moeda>
       <valor>1000</valor>
    </root>`,
    QueueUrl: QUEUE_URL
  }).promise()
  console.log('mensagem enviada com sucesso!')
}

sendPoisonMessage()

