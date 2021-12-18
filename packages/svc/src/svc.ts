import { Vpc } from "shared";

const vpc = new Vpc("some-vpc", { argOverrides: { vpc: {} } });

export const vpcArn = vpc.vpc.arn;
