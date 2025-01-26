import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/myblog.jpg';
import imageSprLessonBuilderDark from 'assets/myblog.jpg';
import imageSprLessonBuilderLightLarge from 'assets/mybloglight.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/mybloglight.png';
import imageSprLessonBuilderLight from 'assets/mybloglight.png';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';


const title = 'My personal blog website';
const description =
  'This blog website is a modern and dynamic platform that has been built using the latest technologies. Tailwind, a utility-first CSS framework, provides a solid foundation for the website design and layout, ensuring that it looks sleek and professional. Meanwhile, Next.js, a React-based framework, powers the website functionality, providing fast and efficient performance, along with easy navigation and a seamless user experience. The combination of these two cutting-edge tools creates a highly optimized and versatile blog website that is ready to meet all your needs and exceed your expectations.';
const roles = [
  'NextJS',
  'tailwindcss',
  'framer motion',
];

export const MyBlog = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];


  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://mysphere.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The outcome of my blog website project is a great success! I utilized
                Next.js and Tailwind CSS to create a fast, responsive, and visually
                appealing platform. The website is easy to navigate and provides a
                seamless user experience. With these cutting-edge technologies, I was able
                to build a scalable and flexible website that is ready to grow with my
                needs. I m really happy with the end result as the website effectively
                showcases my content and connects with my audience. I have a high-quality
                platform that serves as a powerful tool for my online presence. Overall,
                I m impressed with the outcome of the project and I m sure that my blog
                website will continue to thrive in the future.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
