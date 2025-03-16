import dotenv from 'dotenv'
import rabbitmqService from '../src/services/rabbitmq.service';
import { config } from '../src/config/config';
dotenv.config()
const queueName = "SMS"

async function startSmsConsumer() {
    try {
        console.log(config.rabbitmqUrl);

        rabbitmqService.subcribeQueue(queueName)
    } catch (error) {
        console.error(`[${queueName}] Error:`, error);
    }
}

startSmsConsumer();