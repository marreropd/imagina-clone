import { Accordion } from "flowbite-react";

type CollapseFAQProps = {
  title: string;
  content: string;
};

export const CollapseFAQ = ({ title, content }: CollapseFAQProps) => {
  return (
    <div className="px-5 py-3">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title className="bg-[#ECEFF5] hover:border-black  hover:bg-[#ECEFF5] hover:border-2 border-transparent	">
            {title}
          </Accordion.Title>

          <Accordion.Content className="border border-black ">
            <p className="mb-2 ms-3 text-gray-500 dark:text-gray-400 ">
              {content}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
