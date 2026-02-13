import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';


export const connectionDetail = [

    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aryan5084102/',
      icon:  <LinkedInIcon className="text-4xl hover:text-[#ba6b3f] transition-colors cursor-pointer" />,
    },
    {
      text: 'GitHub',
      href: 'https://github.com/Aryan5084102',
      icon:  <GitHubIcon className="text-4xl hover:text-[#ba6b3f] transition-colors cursor-pointer" />,
    },
    {
      text: 'Send Email',
      href: 'mailto:aryanverma5084102@gmail.com?subject=Freelance Enquiry from Portfolio&body=Hi Aryan, I would like to discuss a project with you',
      icon:  <EmailIcon className="text-4xl" />,
    },
    {
      text: 'X (Twitter)',
      href: 'https://x.com/aryan5084102',
      icon:  <XIcon className="text-3xl hover:text-[#ba6b3f] transition-colors cursor-pointer" />,
    },
  ]