import ampq from "amqplib"
import { config } from "../config/config"

class RabbitMQService {
    private channel: ampq.Channel | null = null

    async connect() {
        try {
            const connection = await ampq.connect(config.rabbitmqUrl)
            this.channel = await connection.createChannel()
            await this.channel.assertExchange(config.exchangeName, config.exchangeType)
            console.log("Connected to RabbitMQ");
        } catch (error) {
            console.error(`RabbitMQ connection error: ${error}`);
            throw error;
        }
    }

    async publish(message: any) {
        if (!this.channel) {
            throw new Error('RabbitMQ channel not initialized.')
        }

        const msgBuffer = Buffer.from(JSON.stringify(message))
        this.channel.publish(config.exchangeName, '', msgBuffer)
    }

    async subcribe(callback: (msg: string) => void) {
        if (!this.channel) {
            throw new Error('RabbitMQ channel not initialized.')
        }

        const { queue } = await this.channel.assertQueue('', { exclusive: true })
        await this.channel.bindQueue(queue, config.exchangeName, '')
        this.channel.consume(queue, (msg) => {
            if (msg) {
                callback(msg.content.toString())
                this.channel?.ack(msg)
            }
        })
    }
}

export default new RabbitMQService;