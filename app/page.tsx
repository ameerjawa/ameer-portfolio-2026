import { Hero } from '@/components/hero/hero';
import { ProofBar } from '@/components/hero/proof-bar';
import { SelectedWork } from '@/components/projects/selected-work';
import { Experience } from '@/components/experience/experience';
import { Stack } from '@/components/stack/stack';
import { Process } from '@/components/process/process';
import { About } from '@/components/about/about';
import { GitHubSection } from '@/components/github/github-section';
import { Contact } from '@/components/contact/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <SelectedWork />
      <Experience />
      <Stack />
      <Process />
      <About />
      <GitHubSection />
      <Contact />
    </>
  );
}
