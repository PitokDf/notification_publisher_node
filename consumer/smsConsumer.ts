import dotenv from 'dotenv'
import rabbitmqService from '../src/services/rabbitmq.service';
dotenv.config()
const queueName = "SMS"

async function startSmsConsumer() {
    try {
        rabbitmqService.subcribeQueue(queueName)
    } catch (error) {
        console.error(`[${queueName}] Error:`, error);
    }
}

startSmsConsumer();