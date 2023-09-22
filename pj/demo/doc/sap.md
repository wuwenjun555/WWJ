# sap

## 不易记住

28
SNS, CloudFormation stacks, CloudFormation StackSets
master, automatic

30
third-party API,public CIDR,ALB,NAT
NAT

31
hybird DNS
all VPCs, inbound

32
EC2 SSH
IAM role

33
5GB Windows
FSx

34
EC2 lacking the Project tag, cost allocation
AWS Config rule
SCP in Org
AWS Config aggregator

35
Org, not network, can Crerate Resource
resource sharing  (Enable resource sharing from the AWS Organizations management account.)
resource share RAM, subnet

36
unhealthy, terminated
Terminate

38
10.10.0.0/16, 10.10.10.0/24
CIDR
peer accepter

43
Web EC2 end-to-end encryption
ALB.Provision

44
approved resources & CloudFormation
upd policy, new policy, new IAM service role

45
1 GB Direct Connection, add a redundant Direct Connection
Delete, Direct Connection gateway

48
Docker, RTO 24, RPO 8, SIA
Store the DOcker iamges in ECR in two regions

49
2 simple Node js
DMS, ALB, Replica

53
NatGateway-Bytes
Add VPC endpoint from applications

56
20 applications, last 12months, next 12month
user-defined
IAM access
Enable Cost Explorer

57
WAF auto all accounts
Use AWS Firewall Manager

58
EBS high-memory EC2
Install CloudWatch agent

59
SNS SQS Lambda URL S3 multi-region
SQS Lambda other region
Subscribe SQS SNS

60
S3 in US, 1-10GB video upload, Australia
S3 Transfer Acceleration
multipart upload

63
PUT
retry logic

64
User_DataProcessor
In Account A, Principa1
In Account B, no Principa1

65
IP CIDR
customer-managed security team's AWS Account

66
WAF Web ACL
Count Enable AWS WAF logging

69
upload documnet, improve latency outside of Europe
S3 Transfer Acceleration
API Gateway

72
OU：Research, DataOps
SCP aws:RequestrdRegion
SCP ec2:InstanceType

76
strategy_reviewer, Creative
ID
Creative decrypt
strategy_reviewer, grant read permissions, decrypt

79
from thier homes, using VPN
main, routing that allows

84
DynamoDB, RCU, WCU, 4hour double the average load
RCU, WCU

86
www.example.com A
an ALB, an Auto Scaling

88
RDS for MySQL, failover, restart can connect
Create an RDS proxy

89
auto framework for cloud govemance and remediation processes
centralized account, IAM role, Lambda
other account, minimal permissions, centralized account's Lambda IAM role

96
unstructured data S3, query and analyze, not access 1 year old, must retain all data
Glue Data Catalog, Athena to query

100
email request account, no costly, fixed monthly budget limit
Use fixed monthly budget
SCP to deny
SNS

103
Web ALB EC2 Auto's min=max=0
SNS

108
ALB CloudFront ECS, must only CloudFront
VPC

110
as code, multi Region, multi account
CloudFormation StackSets

112
Shared Services, TGW Direct Connect gateway on-permises, not able to resolve addrsses in private on-permises domain
outbound, RAM

113
approvae all new IAM users
EventBridge
Step Functions
SNS to security team

115
RDS MySQL 40s 20s
Proxy
Aurora
Aurora

116
DBA Secret Manager
DBA-Secrfet

119
large numbers of computer-generated calls
CCP

120
two-way replication SSE-S3
SSE-S3, S3 Batch

122
third-party security tool, 15 years
ALB
Gateway LB

129
ElasticCache for Redis, MariaDB
a part of an Auto
Multi_AZ, across two AZ
Multi-AZ

130
AD IAM SSO
IAM Identity Center,AD Connector

135
10 new Domain name
Lambda
CloudFront, Lambda@Edge
SSL ACM

138
ElastiCache for Redis, encription
AUTH token, Secrets Manager

139
customer service center
Amazon Connect, Pinpoint

144
migrate SQL Server, near-zero downtime
DMS CDC

147
S3 to S3
in destination
in destination
in destination

148
EC2 S3 1TB cost
AWS Service Catalog

149
acquired seceral other companies
Athena QuickSight

150
app runs on physical servers
DMS SCT CDC

151
S3 CloudFront REST API CSV report
Optimizer, EventBridge, Lambda

152
TensorFlow AI
SMS

154
SMTP SES
SES API

155
attackes ECS DynamoDB ALB
CloudFront
WAF

156
Elastic Disaster Recovery
private subnets
Direct Connect
Recovery

158
Lambda VPC IPv4, provide a single public IP
NAT gateway

159
EC2 CPU memory cost
CloudWatch agent
Optimizer

## 需要加强记忆

9
MAC
Stroe licence file in S3
System Manager Parameter Store

11
Procurement Manager
root-level

12
NET 20000
Multi-AZ

17
CI/CD, release every hour, rollback quickly
Elastic Beanstalk

18
OU, a new biz unit
root SCP, Move

21
canary
alias

25
two-tir web-based
Replicas, ALB

27
semi-structured JSON
Kinesis Data Firehose Lambda, Elasticsearch

29
SAN, 200GB
DataSync

41
50 Account same OU
RAM
TGW attachment

46
transit account, TGW, VPN, Config, IP
prefix

47
multi DevOps
Access Advisor
Removw FullAWSAccess SCP
OUs

51
200TB 72hours
S3 Intelligent-Tiering

54
game first game
Create another S3 in a new region

61
DynamoDb serverless a simple API over HTTPS
API Gateway REST API
Lambda@Edge

62
DX-A, DX-B, TGW
transit VIF DX-A VIF DX-B Peer

73
image-process

98
auditing the security setup of Lambda
Enable, Deploy

99
web app in EC2, microservice on containers
ECS

114
delivery company, drivers, signatures and photos through FTP
Transfer Family

125
video 30min SQS dead-letter maxReceiCount = 1
scale-in protection

127
198.51.100.2, 203.0
CloudWatch, destination 198, source 203.0

160
Lambda image ARN
Lambda function alias


## 大概率不会错

3
5
6
7
8
10
13
14
15
16
19
20
23
26
40
42
50
52
55
67
68
70
71
74
75
77
78
80
81
82
83
85
87
90
91
92
93
94
95
97
101
102
104
105
106
107
109
111
117
118
121
123
126
128
131
132
133
134
136
137
141
142
143
145
146
153
157

## 一定不会错

1
2
4
22
24
37
39
140









201
IAM user secret access key, Code Commit, auto find
Code Commit trigger, Lambda scan & disable

202
1AZ, Inbound, third-party audit
Multi-AZ, Auto Scaling, Kinesis Data Firehose

203
Web app NoSQL, High availability, fail in 1 minute to other region, min impact user exp
30 seconds
global table, DynamoDB, two Region
hot standby model in multi-AZ, zonal Reserved Instances min, On-Demand Instance

204
Org 1000, 540, S0
master account, RemoveAccountFromOrg
Call InviteAccountToOrg
confirm

205
Six partner, API Gateway, 1000 req from 500 IP
IP, usage plan

206
SaaS, SFTP
AWS Transfer for FTP

207
MS SQL, 200G, bk S3, 10Gbps Direct Connect
S3, SMB

208
education company web app, ECS Auot Sc ALB,failed login auth 500 IP
WAF web ACL rate-based rule

209
S3 muti-app access, no internet, lowest permission to app
S3 point
gateway endpoint 4 S3

210
microservice in EC2 multi-AZ, add RESTAPI, no internet
new if endpoint  API Gateway, private

211
1AZ 5EC2, high-throughput, low-latency network
cluster, enhanced network

212
EC2 EFS RDB, Backup other Region
Backup paln
another Region
SNS

213
Auto Scaling EC2 CodePipline CodeDeploy
AMI, CodeDeploy agent

214
hybird VPC EC2 CloudWatch, read local multi-RDB, realtime watch RDB, Splunk
Kinesis Data Firehose, Lambda, CloudWatch Logs

215
video app microservice, 5 million = 500w users, 30 million = 3000w, Fargate ECS blue/green
ALB, Service Auto Scaling

216
conn on-premises data center to AWS, VPCS in diff Regions
Direct Connect, VIF, TGW VPCS

217
AWS WorkSpaces, FSX Windows File Server file system, DNS Active Directory, HDD 16MBps
AWS Backup

218
ALB EC2 Auto Scaling
CloudWatch Logs

219
on-premises data center to AWS, MongoDB, EC2 no internet, private network, app-db neef secret, DB scale
DocumentDB(MongoDB), IOPS, cluster

220
5 team, only America Region Resource, collect all money
Org
OU SCP denies
role in management account

221
EC2 diff level access, Active Directory domain, MFA
ADS for Microsoft AD, AWS WorkSapce, 

222
app in 3AZ EC2, 3 private netwok, ALB, IP
1 NAT, CloudWatch

223
Azure AD, multi-Account, tmp secret
Org
SSO
SSO

224
JSON to no fixed schema db, realtime
Cassandra

225
custom network analysis VPC in out, CloudFormation 3 EC2 Auto Scaling
CloudWatch agent
SNS
SNS

226
premises Oracle Linux to AWS, DB PW rotate each year
Secrets Manager

227
premises RDB session to AWS, other Region, highest performance
ElastiCache for Memcached

228
static web regist user,S3 CloudFront WAF, API Gateway Lambda, CoRS err
API Gateway CORS

229
app EC2 MongoDB on-premises data center
DMS

230
Auto Scaling EC2 app, ALB Route 53 ALE, 10%
target group ALB 2 new logic EC2

231
DynamoDB on-demand capacity mode, performance high availablity
three-node DAX, read DB, write DAX

232
Org, sales S3, maketing QuickSight, KMS S3
Update S3, Create KMS grant, Grant, Update

233
public API ECS, ALB Fargate Service Auto Scaling, SQL injection attacks
SQL database rule group

234
single-digit milliseconds, build app once deploy on-premises & cloud & hybird, same tool & APIs & services
AWS Outposts

235
AWS IoT Core, DynamoDB, 2 Region
Route 53 latency=based routing policy, IoT Core data endpoints in both Region, cross-Region replaction

236
Org Lambda Aurora, db auto backup, to a new account
RAM Lambda & Aurora, grant target can clone Aurora

237
third-party route plan app, Docker img Registry, cost-effectivily
ECS Fargate

238
app S3 2 Region, 2 S3 sync, LEAST operational overhead
Multi-Region Access point
Cross-Region Replication (CRR)
Versioning

239
Org Lambda DynamoDB, confidential data
resource-based IAM policy, (fine-grained access control)

240
MySQL RDS us-east-1, Europe, real time
Aurora MySQL cluster.

241
one-time migaration MySQL to Aurora, 60BT
Snowball, DMS

242
web static upload download large files
S3 server-side encryption
SSE-KMS CloudFront
HTTP HTTPS

243
app Linux EC2 ALB MySQL RDS, app RPO 2 minute & RTO 30 minute, DB RPO 5 minute RTO 30 minute
DLM, cross-Region read replica for RDS DB Instance

244
Auto Scaling EC2 ALB, attack from diff ip
AWS Shield Advanced

245
Org Control Tower, need policy detect RDS DB from not encrypted prod OU
Enable appropriate control, strongly recommended, in Tower

246
upload photo S3 app, Lambda DynamoDB Limits arround
WCU
timed-out Lambda funcitons

247
data rate constant, night 4 hours, fail next run again, EC2 pool EBS 1-year run full time, cost
Kinesis Data Firehouse S3, Batch 50%

248
Elastic Beanstalk blue/green,
swap URLs

249
full manage migrate to AWS, store important docs: highly durable anf avaliable, encrypted rest & transit, KMS rotate
S3 HTTPS KMS

250
app CloudFront for globa scalability, CloudFront cache hit ratio dropping
Lambda@Edge function

251
collect large sample data from device, 8KB/s, near-real-time analy to data warehouse
Kenesis Data Streams, EMR Redshift

252
SAML 2.0 (IdP) , federated identity web portal not able access
IAM roles SAML principal
STS ARN
SAML map users or groups

253
logging service EC2, client serv - PrivateLink - logging serv, NLB
NALC, interface endpoint
EC2 ingress client

254
app S3 download report
S3 IgnorePublicAcls

255
RDS SynamoDB cost, CloudFormation consistent tagging
tag Editor, SCPs

256
us-east-1, upload photo S3, upload slow in Europe
S3 transfer Acceleration

257
Auto EC2 2AZ 1subnet, max = 20 instance, 10.0.0.0/23 AZ1, 10.0.0.0/24 AZ2, 10.0.1.0/24
Update AZ2 only, del & renew AZ1, Update AZ1 only, del & renew AZ2, AZ3

258
high performance computing(HPC) cluster large file EFS, EC2 100, EC2 1000 below
a single AZ
Elastic Fabric Adapter(EFA)
FSx Lustre

259
API Gateway DynamoDB Lambda, GET/posts/[postid], GET/users[userid], GET/comments/[commentid], real time
AppSync WebSockets

260
us-east-1 3AZ ALB EC2 MySQL, cross-Region data recovery RTO = 5min RPO = 1min, Route 53 DNS fail to us-west-2
Aurora global primary us-easet-1 secondary us-west-2

261
Org Regions, must tagged, enforced based on group, min config
new OU, SCP limit Region

262
timesheet entries from device, timesheet submit weekly Friday, format report, highly available svale
ECS multi-AZ scheduled Auto Scaling on Friday
S3 Athena QuickSight

263
upload photo, 10000 users worldwide
SQS

264
order SQS, visibility timeout 30s, backend proccessing timeout 10s 
SQS standard quere as dead-letter quere

265
LB EC2, DB API service, biz logic, need decoupled/scalable/retain fail order/min costs
S3 App Sync SQS lambda SQS dead-letter

266
VPC span across multi-AZ NAT, hub-and-spoke, spoke VPC NAT
TGW share attach VPC

267
predictable model high sales traffic 4 hours daily, DynamoDB 100,000 RCUs 80,000 WCUs, cost
Db auto scaling

268
DynamoDB,on-demand capacity mode, once a day million records loaded to table, keys, cost
DAX, provisioned capacity mode, DB auto scaling

269
Org S3 access points, only in VPCs not internet
SCP root level

270
large data IoT, Optimized ROW Columnar(ORC) files Hadoop(HFDS) EMR, SQL 15min run only 5-10 PM, cost
S3 Glue Athena

271
security team need read-only access to all accounts from its ownAWS account, Org & create account from security team
OrganizationAccountAccessRole to create role, use teh IAM role togain access

272
SFTP single EC2 Elastic IP, SSH auth, security group allow IP, need availabbility/min complex/min disruption
S3 VPC-hosted internet-facing endpoint

273
DHS host VPC, outbound endpoint Rout 53 Resolver

274
multi account - one account - internet, TGW, single Region, 
new VPC TGW, Network Firewall

275
ECS Auto Scaling EC2 ECR, new img version unique tag
EventBridge Step functions SNS

276
10,000 sensors on-premises Kafka MQTT, S3
IoT Core, Kinesis Data Firehose stream, Lambda

277
multi team 1 Region, VPC - on-premises, 50 Mbps, most cost
CloudFormation, shared services account, RAM
VPN

278
SaaS ALB EKS us-east-1, non-standard REST: LINK/UNLINK, user out US long time API, min ops overhead
Global Accelerator

279
user change another's security group, send alert
AWS Config, SNS

280
20 EC2 multi EBS, bk Region, recover 1 biz day
AWS Backup

281
Org OWASP
AWS Config
Enable all features for the organization
Firewall

282
migrate Oracle to PostgreSQL in another Account, no downtime, min time,
Create a new RDS, SCT
VPC peering
DMS a full load plus CDC

283
multi-account, private network, MFA, dev/stage/prod/shared network
landing zone Tower, Org
TGW, route table
Single sign-On MFA

284
Org,EC2 Fargate Lambda, cost
Compute Savings Plan, manage account

285
TGW
Create dedicated TGW route table

286
EMRFS 1:00 AM 6 hours, cost
master On-Demand, task nodes on Spot, Terminate only task node

287
machine learning Step Functions, Lambda
SNS
task Email SNS
["states.ALL"]

288
ECS API Gateway Aurora DynamoDB, CodePlpeline, DR RPO 2 hours RTO 4 hours, cost
AWS backup

289
Aurora MySQL,  credentials text config file, secret rotate auto
RDS Proxy, Secrets Manager

290
send data local to S3, S3 diff account, no internate
private VIF
S3 interface endpoint

291
Org dev accound/prod accound, IAM user stop both account resource
Create IAM user in manage account, Create cross-account roles in member account, Grant IAM user access to role

292
hybird, EC2 3 diff Region VPCs, Direct Connect, cost
Direct Connect closest Region
private VIF

293
Tower Org Config Trusted Advisor, dev OU 100 dever, cost
preventive guardrail Tower 

294
MS SQL lambda, dev/prod env, clone dr
Secrets Manage

295
Org CPU mem EC2, downsize
CloudWatch agent, manager account

296
DR t3.large EC2 Auto 3AZ, MySQL RDS, to second env RPO = 30 second RTO 10 min,
IaC, cross-region replac RDB, 

297
game, 12 r6g.16xlarge(memory optimized) EC2
r6g.4xlarge(memory optimized), 3, 3, 12
