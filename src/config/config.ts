export const config = {
    port: process.env.PORT || 8080,
    rabbitmqUrl: process.env.RABBITMQ_URL || 'amqp://localhost',
    exchangeName: process.env.EXCHANGE_NAME || 'notification',
    exchangeType: process.env.EXCHANGE_TYPE || 'fanout',
    nodeEnv: process.env.NODE_ENV || 'development'
}