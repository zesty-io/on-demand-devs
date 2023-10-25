import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CtaButton from "@/components/CtaButton";
import TeamCard from "@/components/TeamCard";
import ProjectCard from "../ProjectCard";

interface ProjectProps {
  title: string;
  image: string;
  link: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  image: string;
}

interface TeamProps {
  name: string;
  position: string;
  profile: string;
}

const Home = ({ content }: any) => {
  const previewPassword = process.env.ZESTY_PREVIEW_PASSWORD;
  const {
    subheader,
    header,
    button_name,
    image,
    meta,
    team_section_description,
  } = content;

  const customRoute =
    meta.web.url + "api/homepage/dataset.json?zpw=" + previewPassword;

  // Dataset states
  const [projects, setProjects] = React.useState<ProjectProps[]>([]);
  const [services, setServices] = React.useState<ServicesProps[]>([]);
  const [team, setTeam] = React.useState<TeamProps[]>([]);

  React.useEffect(() => {
    console.log(previewPassword);
    if (previewPassword) {
      try {
        fetch(customRoute)
          .then((response: Response) => response.json())
          .then((data) => {
            setProjects(data?.projects);
            setServices(data?.services);
            setTeam(data?.team);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <>
      <div className="bg-dark relative z-10">
        <section
          id="home"
          className="hero w-full min-h-[350px] md:min-h-[100vh] md:px-20 lg:px-[10%] px-4 flex justify-center items-start flex-col"
        >
          <div data-aos="fade-down" className="z-20  w-full md:w-auto">
            <h6 className="uppercase font-extralight text-white text-lg md:text-2xl tracking-widest mb-0 md:mb-2">
              {subheader}
            </h6>
            {header && (
              <h2 className="uppercase font-extrabold text-main-text-color text-3xl md:text-6xl mb-6 md:mb-10">
                <div dangerouslySetInnerHTML={{ __html: header }}></div>
              </h2>
            )}

            <CtaButton>{button_name}</CtaButton>
          </div>

          <img className="hero-image" src={image?.data[0].url} alt="Hero" />
        </section>

        <section
          id="services"
          className="w-full bg-secondary-dark md:px-20 lg:px-[10%] px-4 py-10"
        >
          <SectionTitle
            kicker={content?.services_section_kicker}
            title={content?.services_section_title}
          />

          <div className="flex flex-wrap items-stretch justify-between">
            {services.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  delay={index + 1}
                  title={item.title}
                  body={item.subtitle}
                  src={item.image}
                />
              );
            })}
          </div>
        </section>

        <section
          id="work"
          className="w-full flex md:px-20 lg:px-[10%] px-4 py-[100px] flex-col bg-dark relative items-center"
        >
          <SectionTitle
            title={content?.work_section_title}
            description={content?.work_section_description}
          />

          <div className=" w-full  min-[350px] flex flex-wrap items-center justify-center">
            {projects.map((item, index) => {
              return (
                <ProjectCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  link={item.link}
                />
              );
            })}
          </div>
        </section>

        <section
          id="team"
          className="team-section w-full md:px-20 lg:px-[10%] px-4 py-16"
        >
          <div className="w-full flex justify-center mb-16">
            <div className="w-full md:w-[70%]">
              <h2 className="text-main-text-color font-bold text-2xl md:text-3xl mb-4 text-center">
                Meet The <span className="text-main-color">Team</span>
              </h2>
              <p className="text-main-text-color text-center">
                {team_section_description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-center">
            {team.map((item, index) => {
              return (
                <TeamCard
                  key={index}
                  name={item.name}
                  position={item.position}
                  profile={item.profile}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
