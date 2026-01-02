<template>
  <UContainer class="flex flex-col items-center relative">
    <div class="bg-grid"></div>
    <UPageHero title="Mehran Mirkhan" :ui="{ container: 'py-16 lg:py-16' }">
      <template #headline>
        <img
          src="/Mehran_profile_pic.jpeg"
          alt="Mehran Mirkhan"
          class="w-48 h-48 rounded-full object-cover mb-4 mx-auto"
        />
      </template>
      <template #description>
        <b
          >Senior Software Engineer
          <span class="inline-block w-4" />
          |
          <span class="inline-block w-4" />
          Machine Learning Specialist
        </b>
      </template>
      <template #body>
        <p>
          Results-oriented <b>Software Engineer</b> with over
          <b>6 years of progressive experience</b> architecting and maintaining
          <b>large-scale, time-critical applications</b>. Expert in the
          <b>Java</b>, <b>Python</b>, and <b>JavaScript</b> ecosystems,
          including <b>Spring Boot</b>, <b>React</b>, <b>Vue</b>, and modern
          Node.js frameworks (<b>Nest</b>, <b>Next</b>, <b>Nuxt</b>). Proven
          track record of <b>leading cross-functional teams</b> in
          <b>Agile environments</b>, driving
          <b>architectural excellence</b> through
          <b>Domain-Driven Design (DDD)</b>, <b>CQRS</b>, and
          <b>Event Sourcing</b>. Committed to
          <b>Test-Driven Development (TDD)</b> and <b>process automation</b> to
          ensure high-quality delivery.
        </p>
        <p class="mt-4">
          Enthusiastic about integrating <b>Artificial Intelligence</b> into
          scalable software solutions with experience in <b>LLM</b> integration
          with web applications for content translation and customer support.
          Experienced with LLM frameworks such as <b>LangChain</b>,
          <b>CrewAI</b>, and <b>Agents-SDK</b>
          from OpenAI.
        </p>
      </template>
    </UPageHero>
    <div class="max-w-2/3 pb-12">
      <div class="text-center font-bold">Skills</div>
      <USeparator size="lg" color="black" />
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex-1 text-right">Programming Languages</div>
        <USeparator
          size="lg"
          color="black"
          orientation="vertical"
          class="mx-8"
        />
        <div class="flex-1 text-left">Java, JavaScript, TypeScript, Python</div>
      </div>
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex-1 text-right">Frameworks</div>
        <USeparator
          size="lg"
          color="black"
          orientation="vertical"
          class="mx-8"
        />
        <div class="flex-1 text-left">
          Spring Boot, React.js, Vue.js, Next.js, Nuxt.js
        </div>
      </div>
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex-1 text-right">Cloud Platforms</div>
        <USeparator
          size="lg"
          color="black"
          orientation="vertical"
          class="mx-8"
        />
        <div class="flex-1 text-left">
          AWS: EC2, S3, Secrets Manager, Rekognition
          <br />
          GCP: Dialogflow, BigQuery, Firebase
        </div>
      </div>
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex-1 text-right">Architecture</div>
        <USeparator
          size="lg"
          color="black"
          orientation="vertical"
          class="mx-8"
        />
        <div class="flex-1 text-left">
          Domain Driven Design, Microservices, CQRS, Event-Sourcing
        </div>
      </div>
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex-1 text-right">Database/Queue</div>
        <USeparator
          size="lg"
          color="black"
          orientation="vertical"
          class="mx-8"
        />
        <div class="flex-1 text-left">
          MySQL, PostgreSQL, MongoDB, SQL Server, Redis, RabbitMQ, Kafka
        </div>
      </div>
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex-1 text-right">DevOps</div>
        <USeparator
          size="lg"
          color="black"
          orientation="vertical"
          class="mx-8"
        />
        <div class="flex-1 text-left">
          Git, Docker, Kubernetes, helm, Jenkins, Prometheus, Grafana
        </div>
      </div>
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex-1 text-right">AI</div>
        <USeparator
          size="lg"
          color="black"
          orientation="vertical"
          class="mx-8"
        />
        <div class="flex-1 text-left">
          PyTorch, Tensorflow, LangChain, CrewAI, Agents-SDK
        </div>
      </div>
    </div>
    <div class="max-w-5/6 pb-12">
      <div class="text-center font-bold">Publications</div>
      <USeparator size="lg" color="black" />
      <ol class="list-decimal list-inside">
        <li class="mt-2">
          <b>Mehran Mirkhan</b>, and Mohammad Reza Meybodi. ”Restricted
          Convolutional Neural Networks.” <b>Neural Processing Letters</b> 50.2
          (2019): 1705-1733.
        </li>
        <li class="mt-2">
          <b>Mehran Mirkhan</b>, Maryam Amir Haeri, and Mohammad Reza Meybodi.
          ”Analytical Split Value Calculation for Numerical Attributes in
          Hoeffding Trees with Misclassification-Based Impurity.”
          <b>Annals of Data Science</b> (2021): 1-21.
        </li>
      </ol>
    </div>
    <div class="max-w-5/6 pb-12">
      <div class="text-center font-bold">Projects</div>
      <USeparator size="lg" color="black" />
      <div>
        <b>Cucumber-easy-REST</b>:
        <span class="inline-block w-4" />
        <ULink
          target="_blank"
          href="https://github.com/MehranMirkhan/cucumber-easy-rest"
        >
          https://github.com/MehranMirkhan/cucumber-easy-rest
        </ULink>
      </div>
    </div>
  </UContainer>
</template>

<style lang="postcss" scoped>
.bg-grid {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
    linear-gradient(to bottom, #80808012 1px, transparent 1px);
  background-size: 24px 24px;
  z-index: -1000;
}
</style>
