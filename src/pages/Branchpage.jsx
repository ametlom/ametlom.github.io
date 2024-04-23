import { MetaTags } from "@components/Metatags";

const BranchPage = () => {
  return (
    <div>
      <MetaTags
        title="Филиалы компании"
        description="Филиалы в городах: Нефтекамск, Уфа, Стерлитамак. Адреса филиалов"
      />
      {/* Your branchpage content */}
      <h1>Наши филиалы</h1>
    </div>
  );
};

export { BranchPage };
