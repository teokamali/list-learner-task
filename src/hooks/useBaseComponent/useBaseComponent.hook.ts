import _ from "lodash";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useEnhancedProps = (args: any) => {
   let disabled = {};

   if (args?.disabled) {
      disabled = { tabIndex: "-1", "aria-disabled": "true" };
   }

   return _({ ...args, ...disabled })
      .omitBy(_.isUndefined)
      .omitBy(_.isNull)
      .value();
};
