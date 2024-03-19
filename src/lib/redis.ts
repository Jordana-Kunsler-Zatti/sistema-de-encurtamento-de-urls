import { createClient } from 'redis';

export const redis = createClient({
  url: 'redis://default:e78142988aa348df8b5fc22c9b323461@us1-coherent-kingfish-41005.upstash.io:41005',
});

redis.connect();
