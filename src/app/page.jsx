import Link from "next/link";

export default function Home() {
  return (
    <main className="flex margin-bottom min-h-screen flex-col p-24">
      <ul className="mb-8">
        <li className="text-3xl font-bold p-[25px]">
          <strong>
            (1) From this{" "}
            <Link
              className="font-bold text-blue-600"
              href="https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8#file-support-tasks-md"
            >
              {" "}
              link{" "}
            </Link>{" "}
            rank your 5 most favourite and 5 least favourite support
            tasks.Provide a brief explanation for each.{" "}
          </strong>{" "}
        </li>{" "}
        <br />{" "}
        <div>
          <li className="text-3xl p-[20px]">
            <strong> Favorites </strong>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Engage multiple users at once in a public discussion, to answer
                their questions and troubleshoot problems{" "}
              </strong>{" "}
              My passion and purpose is to advocate for my customers.Having
              multiple users wanting to engage in a public discussion shows that
              they are just as committed to the product as I am to their success{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong> Help train and onboard new support teammates </strong>{" "}
              This one seems quite obvious but having new hires up to speed
              quickly benefits everyone{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Work with 3 rd party partners to track down a tricky situation
                for a joint customer{" "}
              </strong>{" "}
              This is tricky and depending on the partner can be quite
              frustrating.But I enjoy connecting a 3 rd party dev with our
              support team and being able to speak openly regarding potential
              issues or scenarios which could affect the customr in the future.{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Work with the product team to develop a new feature based on
                feedback from customers{" "}
              </strong>{" "}
              I believe all products should be developed through the suggestions
              of their customers.Being the proxy for my customer I love when a
              customer requested feature gets created and deployed.{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Act as a dedicated CSE for a handful of key customers to ensure
                their success using Vercel{" "}
              </strong>{" "}
              This is where I can build those strong, long - lasting
              relaionships with customers.And being able to work closely with
              them, I can have a higher impact on them reaching their goals and
              remaining a customer.Seeing my customers succeed is where I find
              the most satisfaction.{" "}
            </p>{" "}
          </li>{" "}
        </div>{" "}
        <div>
          <li className="text-3xl p-[20px]">
            <strong> Least Favorites </strong>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Respond to 25 + support requests via email every day{" "}
              </strong>{" "}
              I would prefer to spend time engaging with my customers or working
              proactively with other vendors to ensure alignment and positive
              business outcomes for our mutual customer.{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong> Help resolve billing issues for customers </strong>I
              would of course facilite as much as I can but I feel that once you
              insert yourself in the customers mind as the money person, the
              relationship can deteriorate and become awkward, lowering the
              quality of the relationship and increasing the chance they start
              ghosting you.{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Scheduling time - off coverage and collaborating as part of a
                growing cohesive support team{" "}
              </strong>{" "}
              This seems like administrative work which can get quite monotonous
              and unfulfilling.I see its necessity but I would rather be doing
              something in benefit of our customers.{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Engage multiple users at once in a public discussion, to answer
                their questions and troubleshoot problems{" "}
              </strong>
              My passion and purpose is to advocate for my customers.Having
              multiple users wanting to engage in a public discussion shows that
              they are just as committed to the product as I am to their success{" "}
            </p>{" "}
          </li>{" "}
          <li className="pl-[20px]">
            <p className="p-[10px]">
              <strong>
                Respond to queries on Twitter, Reddit, Hacker News and other 3
                rd party sites{" "}
              </strong>{" "}
              I do not have social media so I do not t know how useful I would
              be for this.{" "}
            </p>{" "}
          </li>{" "}
        </div>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (2) What do you want to learn or do more of at work ?{" "}
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            I would like to further my skills as in problem - solving, keeping
            up with the latest web frameworks and technologies.I want to hone my
            skills as a customer advocate, ensuring I am always meeting their
            expections.I would like to do more mentoring and helping internally
            as well because solving one issue for a customer is likely to save
            time for many other customers as well.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (3) Describe how you solved a challenge or technical issue that you
            faced in a previous role preferably in a previous support role.How
            did you determine that your solution was successful ?
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            I faced a significant challenge involving the exposure of Personally
            Identifiable Information due to the client’ s company deploying new
            web pages without prior notification.This led to PII being exposed
            on public - facing pages, which was a critical issue requiring
            immediate attention{" "}
          </p>{" "}
          <p className="p-[10px]">
            I advised the developers of the client to implement a solution where
            they added a unique identifier to each sensitive HTML element
            containing PII.This would allow us to be proactive with PII
            remediation as this solution will scale infintiely without the risk
            of future exposure{" "}
          </p>{" "}
          <p className="p-[10px]">
            We monitored the web pages continuously to ensure no further PII
            exposure occurred.I set up automated alerts to detect any new
            instances of PII exposure.When the customer renewed their contract,
            they explicitly mentioned the resolution of the PII issue as a key
            factor in their decision to continue our partnership.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (4) When would you choose to use Edge Functions, Serverless
            Functions, or Edge Middleware with Vercel ?
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            Edge functions would be used to reduce latency for the end user as
            the distance to the server is the most efficient.Also youb can serve
            more geographically relevant content to the user as the server is in
            the closer proximity{" "}
          </p>{" "}
          <p className="p-[10px]">
            Edge Middleware is code that executes before a request is processed
            on a site.It can modify requests and responses in -flight for tasks
            like URL rewrites, redirects, authentication, header manipulation{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (5) Imagine a customer writes in requesting help with a build issue
            on a framework or technology that you have not seen before.How would
            you begin troubleshooting this and what questions would you ask the
            customer to understand the situation better ?
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            I would begin by gathering all information I could find regarding
            the error, especially the repro steps as well as any console or
            network errors.With the information, I would research the product
            framework / technology, reading through their documentation, check
            stack overflow and other like sites to get information on the
            error.I would want to know if there had been any new updates or
            releases that could impact this issue.If still unsuccessful, I would
            try to find a tempoary work around while I consult internally to
            find a solution{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (6) The customer from question 5 replies to your response with the
            below :
            <p>
              {" "}
              “ I am so frustrated.I\’ ve been trying to make this work for
              hours and I just can’ t figure it out.It must be a platform issue
              so just fix it for me instead of asking me questions.”{" "}
            </p>
            Please write a follow - up reply to the customer.{" "}
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            I am sorry to hear that you are experiencing difficulties with the
            platform.Let me first gather some information in order to fully
            understand the issue at hand.If this proves unsucessful, I will be
            happy to jump on a call with you to walkthrought he issue.First,
            please provide the specific error messages you’ re encountering ? If
            available, also provide any other details regarding this build
            issue, and any troubleshooting steps you performed.Thanks for your
            cooperation as we work to resolve this issue as efficiently as
            possible.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (7) A customer writes in to the Helpdesk asking\ How do I do a
            redirect from the / blog path to https: //example.com?\ Please write
            a reply to the customer.Feel free to add any information about your
            decision making process after the reply.{" "}
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <ul className="p-[10px]">
            <li> First create or open your next.config.js file </li>{" "}
            <li>
              Export a redirects() function which returns an array containing sn
              object with 3 keys : source, destination, and permenant set the
              value of source : /blog, destination: https: / / example.com and
              permenant : true{" "}
            </li>{" "}
            <li>
              This will ensure that users that reach the / blog path will
              permanently encounter a 301 redirect to https: //example.com{" "}
            </li>{" "}
          </ul>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (8) A customer is creating a site and would like their project not
            to be indexed by search engines.Please write a reply to the
            customer.Feel free to add any information about your decision making
            process after the reply.{" "}
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            I would suggest that they add a robots.txt file to the public
            directory within their app as this will signal to search engines to
            not allow crawlers to index the site.Another option would be to add
            a meta name = robots content = noindex element to the head of their
            HTML file.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (9) What do you think is one of the most common problems which
            customers ask Vercel for help with ? How would you help customers to
            overcome common problems, short - term and long - term ?
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            I would think it would be regarding caching.The methods used by
            NextJS make performance super quick but there are some inheritant
            quirks that may be unintuitive to many users.Clear documentation
            that includes guidelines on cache configuration, cache invalidation
            strategies, and how to handle dynamic content caching would be the
            topics I think are the most common.In order to help the customer, I
            would encourage them to read the documentation provided on their
            topic of confusion.Depending on the customer situation, I would
            offer to get on a call to help debug and explain how and why the
            issue occured to ensure future success.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <ul className="mb-8">
        <li className="text-2xl font-bold p-[25px]">
          <strong>
            {" "}
            (10) How could we improve or alter this familiarisation exercise ?
          </strong>{" "}
        </li>{" "}
        <li className="pl-[20px]">
          <p className="p-[10px]">
            It is a bit awkward answering these questions within a code editor.I
            would suggest seperating the deploy an app portion from these pure
            writing questions.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
    </main>
  );
}
