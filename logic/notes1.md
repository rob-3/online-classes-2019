# Propositional Logic
- A mathematical way of modeling the structure of sentences and arguments
- Based on the "simple statement", or "proposition"
- Simple statement: a statement that does not contain any other statement
	- I am happy.
- Complex statement: does contain another statement
	- It is not the case that I am happy.
	- You are wearing a blue shirt and you are wearing yellow pants.
	- The buck stops here or I'm a liar.
	- We will meet on Monday if I'm well.
- Several types of complex statements (applies to above)
	1) It is not the case that _
	2) _ and _
	3) _ or _
	4) _ if _

# Operators
- "~" negation
- "∙" conjunction
- "∨" disjunction
- "⊃" implication
- "≡" equivalence

- Of note:
	- ~ only applies to 1 argument
	- ⊃ only operator for which order matters

# Antecedent
- First statement in an "if"

# Consequent
- Second statement in the "if", should follow the "then"

# WFF (Well-formed formula)
- The grammar of logic
- Several rules:
	1) Any single letter is well-formed
	2) Any proposition plus negation is well-formed
	3) Any joining of propositions must be surrounded with parentheses
	4) Statements cannot be combined without an operator
	5) Tilde cannot follow statements; it must precede a statement
	6) Dot, triple bar, and horseshoes should join two statements

# Input guide
C) => ⊃
~ => ~
=3 => ≡
Sb => ∙
OR => ∨

Example
-------
(S ∨ P) ∙ (A ⊃ ~P)

Trickier Symbolizations
-----------------------
- Look for prefixes that can mean "not" eg unstable, irresponsible
- Look for compound subjects eg Mary and Sam took the bus => Mary took the bus;
  Sam took the bus.
- ∙ can stand in for many connotative conjunctions eg "but", "yet", "however"...
- Negative contractions usually indicate ~

# The meaning of ∨
- In logic, ∨ always is inclusive and indicates that either statement or both
  are true
- To symbolize A "XOR" B use (A ∨ B) ∙ ~(A ∙ B)
- ∨ or ⊃ can be used to symbolize unless:
	- You'll die unless you breathe = you will breathe or die: D ∨ B
	- If you don't breathe, you'll die: ~B ⊃ D
- "Neither nor": I neither play the trombone nor the bassoon
	- ~T ∙ ~B or ~(T ∨ B)

# When to use ⊃
- Any time you have an "if" or the like
- Any implications; premises-based sentences
Ex: Provided that you buy the drinks, I'll pay for dinner.
- B ⊃ P
Ex: That something is square indicates it has four sides
- S ⊃ F

# Only if
Ex: The plant will live only if it is watered
- L ⊃ W
Ex: The plant will live if it is watered.
- W ⊃ L

# Using ≡
- Just if
Ex: I'll agree just if you pay me $1000
- A ≡ P
- Just in case
Ex: I'll go to the movies just in case you order popcorn
- M ≡ P
- Is equivalent to
Ex: Being a triangle is equivalent to being a closed three sided figure
- T ≡ C

Examples
--------
G ⊃ (A ∙ H)

S ⊃ F

P ∨ R

(Z ∨ F) ∙ ~(Z ∙ F)

(F ∙ ~(T ∨ P)) ⊃ H
