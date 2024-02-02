import { handler } from 'HANDLER';
import polka from 'polka';
import { ServerlessAdapter } from '@h4ad/serverless-adapter';
import { PolkaFramework } from '@h4ad/serverless-adapter/frameworks/polka';
import { DigitalOceanHandler } from '@h4ad/serverless-adapter/handlers/digital-ocean';
import { PromiseResolver } from '@h4ad/serverless-adapter/resolvers/promise';
import { HttpFunctionAdapter } from '@h4ad/serverless-adapter/adapters/digital-ocean';

const server = polka().use(handler);

export const main = ServerlessAdapter.new(server)
  .setFramework(new PolkaFramework())
  .setHandler(new DigitalOceanHandler())
  .setResolver(new PromiseResolver())
  .addAdapter(new HttpFunctionAdapter())
  .build();
