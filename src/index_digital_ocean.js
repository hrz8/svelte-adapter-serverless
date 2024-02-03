import { handler } from 'HANDLER';
import polka from 'polka';
import { ServerlessAdapter } from '@altalune/serverless-adapter';
import { PolkaFramework } from '@altalune/serverless-adapter/frameworks/polka';
import { DigitalOceanHandler } from '@altalune/serverless-adapter/handlers/digital-ocean';
import { PromiseResolver } from '@altalune/serverless-adapter/resolvers/promise';
import { HttpFunctionAdapter } from '@altalune/serverless-adapter/adapters/digital-ocean';

const server = polka().use(handler);

export const main = ServerlessAdapter.new(server)
  .setFramework(new PolkaFramework())
  .setHandler(new DigitalOceanHandler())
  .setResolver(new PromiseResolver())
  .addAdapter(new HttpFunctionAdapter())
  .build();
