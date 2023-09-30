# Flexnet
FlexNet is a Cloud-based streaming service. It is hosted on AWS and it works in a very similar manner as Netflix. FlexNet contains various movies and trailers to be watched inside and is user-friendly as well.

# System Design Involved
FlexNet works in a way similar to Netflix. The following design is followed for the streaming service.
1. The streaming content, i.e., movies and trailers are stored inside **_buckets_** in the _**Simple Storage Service (S3)**_ of AWS. Since S3 provides an infinite amount of space to store data, this is the best place to store all data that is needed on an on-call basis.
2. The Streaming application website is hosted on the **_Amazon Elastic Compute Cloud (EC2)_**. This is essential because the application needs other services (which we will talk about later) that S3 cannot provide.
3. The streaming happens with the help of **_Content Delivery Networks (CDNs)_**. CDNs ensure that the streaming experience is smooth and stalling-free.
4. For the website to handle huge traffic, we have added load-balancers, installed multiple instances, and enabled fault tolerance and auto-scaling too. These services are provided inside Amazon EC2, and thus it is essential for the website to be present in EC2 and not hosted on S3.

Netflix also follows this system design. The difference between FlexNet and Netflix is the scale of the application. FlexNet exists at a prototype level as it was done as a project.


# Steps to Start Service
1. Download the latest code from the repository
1. Configure Node if not installed already
1. Run `npm install` to install dependencies
1. To start service on localhost, run `node index.js`

# Note
Unfortunately, due to financial reasons, we had to put down the website hosted on AWS. But feel free to use our code and host your own website using a similar design.

