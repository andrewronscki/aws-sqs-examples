const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1'
})

const sqs = new AWS.SQS()
const QUEUE_URL = process.env.QUEUE_URL

async function sendMessage() {
  await sqs.sendMessage({
    MessageBody: JSON.stringify({
      conta_origem: {
        agencia: 0001,
        numero_conta: '123456-7',
      },
      conta_destino: {
        agencia: 0001,
        numero_conta: '765432-1',
      },
      valor: 1000,
      moeda: 'BRL',
    }),
    QueueUrl: QUEUE_URL
  }).promise()
  console.log('mensagem enviada com sucesso!')
}

sendMessage()
