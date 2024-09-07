import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MainPage() {
  return (
    <div>
      <form>
        <div>
          <h1>Mortgage Calculator</h1>
          <Button>Clear All</Button>
        </div>

        <div>
          <Label htmlFor="mortgage-amount">
            Mortgage Amount
            <Input placeholder="" id="mortgage-amount" />
          </Label>

          <div>
            <Label htmlFor="mortgage-term">
              Mortgage Term
              <Input placeholder="" id="mortgage-term" />
            </Label>
            <Label htmlFor="interest-rate">
              Interest Rate
              <Input placeholder="" id="interest-rate" />
            </Label>
          </div>

          <div>
            <figure>
              <figcaption>Mortgage Type</figcaption>

              <ul>
                <li>
                  <Label htmlFor="type-repayment">
                    <Input type="radio" id='type-repayment' name="type" checked />
                    Repayment
                  </Label>
                </li>
                <li>
                  <Label htmlFor="type-interest">
                    <Input type="radio" id='type-interest' name='type'  />
                    Interest Only
                  </Label>
                </li>
              </ul>
            </figure>
          </div>
        </div>

        <Button>Calculate Repayments</Button>
      </form>
      {/* empty */}
      <section>
        <h2>Results shown here</h2>
        <p>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>

        {/* <!-- Completed results start --> */}
        <div>
          <h2>Your results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
        </div>
      </section>
      Your monthly repayments Total you'll repay over the term
      {/* <!-- Completed results end --> */}
    </div>
  );
}
